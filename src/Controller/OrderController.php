<?php

namespace App\Controller;

use App\Classe\Cart;
use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Form\OrderType;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    #[Route('/commande', name: 'app_order')]
    public function index(Cart $cart, Request $request): Response
    {
        if(!$this->getUser()->getAddresses()->getValues()){
            return $this->redirectToRoute('app_address_add');
        }

        $form = $this->createForm(OrderType::class, null, [
            'user' => $this->getUser()
        ]);

        


        return $this->render('order/index.html.twig', [
            'form' => $form->createView(),
            'cart' => $cart->getFull()
        ]);
    }

    #[Route('/commande/recapitulatif', name: 'app_order_recap')]
    public function add(Cart $cart, Request $request, EntityManagerInterface $entityManager): Response
    {


        $form = $this->createForm(OrderType::class, null, [
            'user' => $this->getUser()
        ]);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $date = new DateTimeImmutable();
            $carriers = $form->get('carriers')->getData();
            $delivery = $form->get('adresses')->getData();
            $delivery_content = $delivery->getFirstname().' '.$delivery->getLastname();
            $delivery_content .= $delivery->getPhone();

            if($delivery->getCompany()){
                $delivery_content .= $delivery->getCompany();
            }
            $delivery_content .= $delivery->getAddress();
            $delivery_content .= $delivery->getPostal().' '.$delivery->getCity();
            $delivery_content .= $delivery->getCountry();


            $order = new Order();
            $order->setUser($this->getUser());
            $order->setCreatedAt($date);
            $order->setCarrierName($carriers->getName());
            $order->setCarrierPrice($carriers->getPrice());
            $order->setDelivery($delivery_content);
            $order->setIsPaid(0);

            $entityManager->persist($order);

            foreach($cart->getFull() as $product){
                $orderDetails = new OrderDetails();
                $orderDetails->setMyOrder($order);
                $orderDetails->setProduct($product['product']->getName());
                $orderDetails->setQuantity($product['quantity']);
                $orderDetails->setPrice($product['product']->getPrix());
                $orderDetails->setTotal($product['product']->getPrix() * $product['quantity']);
                $entityManager->persist($orderDetails);

            }
            $entityManager->flush();

        }


        return $this->render('order/add.html.twig', [
            'cart' => $cart->getFull(),
            'carrier' => $carriers,
            'delivery' => $delivery_content
        ]);
    }

   // return $this->redirectToRoute('cart');
}

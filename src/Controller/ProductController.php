<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{

    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/nos-produits', name: 'products')]
    public function index(): Response
    {

        $products = $this->em->getRepository(Product::class)->findAll();

        return $this->render('product/index.html.twig', [
            'products' => $products,
        ]);
    }

    #[Route('/produit/{slug}', name: 'product')]
    public function show($slug): Response
    {

        $product = $this->em->getRepository(Product::class)->findOneBySlug($slug);

        if (!$product){
            return $this->redirectToRoute('products');
        }

        return $this->render('product/product.html.twig', [
            'product' => $product,
        ]);
    }

    
    public function categoryProducts($name)
    {

        $category = $this->em->getRepository(Category::class)->findOneBy(['name' => $name]);

        if (!$category) {
            throw $this->createNotFoundException('Catégorie non trouvée');
        }
        
        $products = $category->getProducts();

        return $this->render('product/category.html.twig', [
            'category' => $category,
            'products' => $products,
        ]);
    }
}

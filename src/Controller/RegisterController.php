<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegisterController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    #[Route('/inscription', name: 'register')]
    public function index(Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();
        

        $form = $this->createForm(RegisterType::class, $user);
$emailAlreadyExist = "";

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {


            $emailAlreadyExist = $this->entityManager->getRepository($user::class)->findOneBy(['email' => $user->getEmail()]);

            

           if($emailAlreadyExist){
             $emailAlreadyExist = "L'email existe déja";
           }else{
            $emailAlreadyExist = 'compte crée';

            $plaintextPassword = $user->getPassword();
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );
            $user->setPassword($hashedPassword);
    

            $this->entityManager->persist($user);
            $this->entityManager->flush();

           
            // Traitement du nouvel utilisateur (redirection, message flash, etc.)
        }
           }

           

        return $this->render('register/index.html.twig', [
            'form' => $form->createView(),
            'emailAlreadyExist' => $emailAlreadyExist,
        ]);
    }
}

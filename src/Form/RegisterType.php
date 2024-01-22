<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Regex;

class RegisterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstname', TextType::class, [
                'label' => false,
                'constraints' => [
                    new Length([
                        'min' => 2,
                        'max' => 30,
    
                    ]),
                ],

                'attr' => [
                    'placeholder' => 'Prénom'
                ]
            ])
            ->add('lastname', TextType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Nom'
                ]
            ])

            ->add('email', EmailType::class,[
                'label' => false,
                'attr' => [
                    'placeholder' => 'Adresse e-mail'
                ]
            ])
            ->add('password', RepeatedType::class,[
                'type' => PasswordType::class,
                'invalid_message' => 'Les mot de passe et la confirmation doivent etre indentique.',
                'required' => true,
                'first_options' => ['label' => false,'attr' => [
                    'placeholder' => 'Mot de passe'
                ]],
                'second_options' => [
                    'label' => false,'attr' => [
                        'placeholder' => 'Répéter le mot de passe'
                    ]
                ],
            ])


            ->add('submit', SubmitType::class, [
                'label' => "S'inscrire"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}

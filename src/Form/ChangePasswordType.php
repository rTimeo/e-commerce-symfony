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

class ChangePasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class,[
                'disabled' => true,
            ])

            ->add('firstname', TextType::class,[
                'disabled' => true,
            ])
            ->add('lastname', TextType::class,[
                'disabled' => true,
            ])

            ->add('old_password', PasswordType::class, [
                'mapped' => false,
                'attr' => ['placeholder' => 'mot de passe actuel'],
            ])

            ->add('new_password', RepeatedType::class,[
                'mapped' => false,
                'type' => PasswordType::class,
                'invalid_message' => 'Les mot de passe et la confirmation doivent etre indentique.',
                'required' => true,
                'first_options' => ['label' => 'nouveau mot de passe'],
                'second_options' => [
                    'label' => 'Confirmer le nouveau le mot de passe',
                ],
            ])

            ->add('submit', SubmitType::class, [
                'label' => "Valider"
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

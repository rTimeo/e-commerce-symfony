<?php

namespace App\Classe;

use Symfony\Component\HttpFoundation\RequestStack;

class Cart
{
    private RequestStack $requestStack;
 
    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    public function initSession()
    {
        return $this->requestStack->getSession();
    }


    public function add($id)
    {
        $cart = $this->initSession()->get('cart', []);

        if(!empty($cart[$id])){
            $cart[$id]++;
        }else{
            $cart[$id] = 1;
        }

        $this->initSession()->set('cart', $cart);
    }

    public function get(){
        return $this->initSession()->get('cart');
    }

    public function remove(){
        return $this->initSession()->remove('cart');
    }

    public function delete($id){
        $cart = $this->initSession()->get('cart', []);
        unset($cart[$id]);
        return $this->initSession()->set('cart', $cart);
    }

}
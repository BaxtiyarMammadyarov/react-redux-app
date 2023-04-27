import {configureStore} from '@reduxjs/toolkit';
import { useState } from 'react';
import productList from '../app-slice/product-slice'

export const GlobalStore =configureStore({
   

   reducer : {
     products : productList

   }

})
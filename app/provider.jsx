"use client";
import { supabase } from "@/services/supabaseClient";
import React, { useState, useEffect } from "react";


function Provider({children}){
    const CreateNewUser=()=>{
        //check if user already exists

        // if not then create new User
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default Provider;
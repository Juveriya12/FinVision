import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req){

  const { email, password } = await req.json();

  try{

    const [user] = await pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if(user.length > 0){
      return NextResponse.json({
        success:true
      });
    }

    return NextResponse.json({
      success:false
    });

  }catch(error){

    console.error(error);

    return NextResponse.json({
      success:false
    });

  }

}
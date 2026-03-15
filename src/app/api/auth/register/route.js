import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req) {

  const { name, email, password } = await req.json();

  try {

    const [existingUser] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if(existingUser.length > 0){
      return NextResponse.json({
        success:false,
        message:"User already exists"
      });
    }

    await pool.query(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name,email,password]
    );

    return NextResponse.json({
      success:true
    });

  } catch(error){

    console.error(error);

    return NextResponse.json({
      success:false,
      message:"Database error"
    });

  }

}
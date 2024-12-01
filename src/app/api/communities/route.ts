import { comunidades } from '../../../data/index';
import { NextResponse } from 'next/server';


export async function GET() {
  return NextResponse.json(comunidades);
}


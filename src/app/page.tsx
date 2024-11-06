"use client"
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState(0)
  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async () => {
    // แก้ URL Endpoint ให้เป็นของตัวเอง
    // let response = await fetch("https://glowing-space-fortnight-qwgjw6q5x992xqgx-3000.app.github.dev/api", {
      // method: "GET",
    // });


    // let data = await response.json();
    // console.log(data)
  }
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    // const weight = (document.getElementById("w") as HTMLInputElement).value
    // const height = (document.getElementById("h") as HTMLInputElement).value

    // เพิ่ม bodyContent หลังจากบรรทัดนี้
    // .....


    // แก้ URL Endpoint เป็นของตัวเอง
    // let response = await fetch("https://bookish-space-sniffle-5xqpx59qvqg2wq9-3000.app.github.dev/api", {
    //   method: "POST",
    //   body: bodyContent
    // });

    // const data = await response.json()
    // setResult(data.body.bmi)
  }
  return (
    <div className="flex justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 bg-yellow-500 p-8">
          <div>
            <label htmlFor="weight">Weight is: </label>
            <input id="w" type="num" placeholder="weight" name="weight" required className="text-black" />
          </div>
          <div>
            <label htmlFor="height">Height is: </label>
            <input id="h" type="num" placeholder="height" name="height" required className="text-black" />
          </div>
          <div>
            <button className="bg-gray-50 text-black py-2 px-4" type="submit">Send</button>
          </div>
        </form>
        <div className="text-2xl">
          Your BMI: {result}
        </div>
      </div>
    </div>
  );
}

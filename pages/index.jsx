import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [inputs, setInputs] = useState({ ["time"]: new Date(Date.now()), age: 68, na: 2, sex:0, bp:2, c:0, model:"tree" });
  const [img, setimg] = useState()
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const get = async () => {
    try {
      console.log("data get",JSON.stringify({
        "age": inputs.age,
        "gender": inputs.sex,
        "bp": inputs.bp,
        "cholesterol": inputs.c,
        "salt": inputs.na,
        "model": inputs.model,
      }))
      const res = await fetch("/api/cors?url=https://verceldjango.wesleyliu4.repl.co/api"
      // const res = await fetch("/api/cors?url=http://127.0.0.1:8000/api?age=68&gender=0&bp=2&cholesterol=2&salt=2&model=svm"
      , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "age": inputs.age,
            "gender": inputs.sex,
            "bp": inputs.bp,
            "cholesterol": inputs.c,
            "salt": inputs.na,
            "model": inputs.model,
          })
        }
      );
      const data = await res.text();
      setimg(data);
      console.log("data",data)
    } catch (error) {
      // setimg(error.toString());
    }
    // try {
    //   const res = await fetch("/api/callback?url=https://reqres.in/api/users/2"
    //   , {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'GOFACT-API-TOKEN' :'hello'
    //     },
    //     body: JSON.stringify({
    //       "name": "wesley",
    //       "job": "zion residenthuikhjk",
    //       "job2": "zion residentdfgx"
    //     })
    //   }
  //     );
  //     const data = await res.text();
  //     setResultCors(data);
  //   } catch (error) {
  //     setResultCors(error.toString());
  //   }
  }

  return (
    <div className=" font-mono">
      <Head>
        <title>Degen ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="navbar text-neutral-content shadow mb-4">
          <a className="btn btn-ghost text-base m-3 text-black normal-case font-extrabold text-left shadow-xl w-16 h-14 rounded-2xl">
            Degen <br /> ML
          </a>
        </div>
        <div className=" flex justify-center border-b">
          <div className=" w-96 mb-5">
            <p className=" text-center text-xl">Drug Treatment Prediction </p>
            <p className=" text-center text-xs pt-2">This is a drug treatment prediction machine learning model. Try to use different training models to observe the effect.</p>
          </div>
        </div>
        <div className=" flex justify-center pt-5">
          <div className=" w-72 h-60 mr-4">
            <p className=" text-center text-xl">Intro </p>
            <p className=" text-center text-sm pt-2 font-sans">
              "Finding the proper treatment, especially drug treatment,
              can be a difficult task. Whether you're looking for drugs to treat seasonal allergies, or you're treating a serious illness,
              collecting data on various aspects of patients and what treatments they best respond to can be vital for saving lives and increasing patient convenience.
              Here, we'll act as a data analyst compiling medical data on a set of patients all suffering from the same illness. During their treatment,
              each patient responded to one of five drug treatments."
            </p>
            <a href='https://dev.to/paulwababu' className=" text-center text-xs pt-2 underline">inspired by paulwababu</a>
          </div>
          <div className=" mt-5">
            <label className=" px-6 mb-6 block">
              <p className=" text-invar-light-grey leading-4 font-normal mb-3">
                Age
              </p>
              <input
                name="age" type="text" onChange={handleChange} value={inputs.age || ""}
                required className="block bg-invar-main-purple h-12 w-28 rounded focus:border-4 border-2 border-black font-normal px-[15px]"
              />
            </label>
            <label className="px-6 mb-6 block">
              <p className=" text-invar-light-grey leading-4 font-normal mb-3">
                Gender
              </p>
              <div className="relative">
                <select name="sex" type="text" onChange={handleChange} value={inputs.sex || ""}
                  required className="block bg-invar-main-purple h-12 w-28 rounded focus:border-4 border-2 border-black font-normal px-[15px]"
                >
                  <option value="0">famale</option>
                  <option value="1">male</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </label>
            <label className="px-6 mb-6 block">
              <p className=" text-invar-light-grey leading-4 font-normal mb-3">
                Na_to_K
              </p>
              <input
                name="na" type="text" onChange={handleChange} value={inputs.na || ""}
                required className="block bg-invar-main-purple h-12 w-28 rounded focus:border-4 border-2 border-black font-normal px-[15px]"
              />
            </label>
          </div>
          <div className=" mt-5">
            <label className="px-6 mb-6 block">
              <p className=" text-invar-light-grey leading-4 font-normal mb-3">
                BP
              </p>
              <div className="relative">
                <select name="bp" type="text" onChange={handleChange} value={inputs.bp || ""}
                  required className="block bg-invar-main-purple h-12 w-28 rounded focus:border-4 border-2 border-black font-normal px-[15px]"
                >
                  <option value="2">NORMAL</option>
                  <option value="1">HIGH</option>
                  <option value="0">LOW</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </label>
            <label className="px-6 mb-6 block">
              <p className=" text-invar-light-grey leading-4 font-normal mb-3">
                Cholesterol
              </p>
              <div className="relative">
                <select name="c" type="text" onChange={handleChange} value={inputs.c || ""}
                  required className="block bg-invar-main-purple h-12 w-28 rounded focus:border-4 border-2 border-black font-normal px-[15px]"
                >
                  <option value="2">NORMAL</option>
                  <option value="1">HIGH</option>
                  <option value="0">LOW</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </label>
          </div>
          <div className=" text-white ml-4">
            <div className=" mt-5 bg-black p-4 h-min rounded-3xl">
              <label className="px-6 mb-6 block">
                <p className=" text-center leading-4 font-normal mb-3 text-white">
                  Model
                </p>
                <div className="relative">
                  <select name="model" type="text" onChange={handleChange} value={inputs.model || ""}
                    required className="block bg-black text-white h-12 appearance-none rounded focus:border border border-white font-normal px-[15px] pr-10"
                  >
                    <option value="tree">Decision <br /> tree</option>
                    <option value="svm">SVM</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 -right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </label>
            </div>
            <button className=" btn btn-wide text-white mt-5 bg-black p-4 h-min rounded-3xl "
              onClick={() => get()}>
              generate
            </button>
          </div>
          {img&& <img src={img} alt="" />}
        </div>
      </div>
    </div>
  )
}

export default Home

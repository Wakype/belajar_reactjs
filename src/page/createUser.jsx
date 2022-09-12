import React from 'react'
import { Input } from '../component'

const CreateUser = () => {
  return (
    <section className="border border-green-500">
        <div className="text-center text-xl font-semibold my-3">
            <h1>Buat User</h1>
        </div>
        <div>
            <form action="" className="flex flex-col justify-center items-center">
                <Input label={'Username'}/>
                <Input label={'Nama'}/>
                <Input label={'Email'}/>
                <Input label={'Jenis Kelamin'}/>
                <Input label={'Password'}/>
                <Input label={'Confirm Password'}/>
            </form>
        </div>
    </section>
  )
}

export default CreateUser
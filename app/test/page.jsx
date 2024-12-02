const page = () => {
    const handleForm = async(formData)=> {
        "use server"
        console.log(formData)
        const useraname = formData.get("username")
        console.log('Hello', useraname)
    }

  return (
    <div>
        <form action={handleForm}>
            <input type="text" name='username'/>
            <button>Send</button>
        </form>
    </div>
  )
}

export default page
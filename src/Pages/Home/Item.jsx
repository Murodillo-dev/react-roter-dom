
const Item = ({rasm,ism,familiya,email}) => {
  return (
    <div className=' text-yellow-500  item w-[350px] h-[auto] px-2 py-3 bg-slate-600 m-3 flex justify-center flex-wrap'>
        <img src={rasm} className="w-[100%]" alt="" />
        <h1 >{ism}</h1>
        <h1>{familiya}</h1>
        <a className="text-[20px] text-red-800" href="">{email}</a>
    </div>
  )
}

export default Item
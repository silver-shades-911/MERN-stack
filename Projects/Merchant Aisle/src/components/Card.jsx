import Rating from "./Rating"

const Card = ({product}) => {
  return (
    <div className='bg-white text-black w-70 rounded-xl p-1 pb-5'>
      {/* Img */}
      <div className=''>
        <img src={`${product.img}`} className='rounded-t-xl w-full h-40' />
      </div>

      {/* */}
      <div className='flex flex-col mt-2 pl-2 '>
        <h3 className='text-lg font-medium'>{product.name}</h3>
        <div className=''>$ {product.price}</div>
        <div className="font-normal">{`${product.fastDelivery ? 'Fast Delivery ' : '4 days delivery'}`}</div>
        <Rating rating={product.rating} />
        <button className="mt-4 text-sm font-medium py-1.5 px-2.5 rounded-lg bg-blue-600 w-fit text-white">Add to Card</button>
      </div>
    </div>
  )
}

export default Card

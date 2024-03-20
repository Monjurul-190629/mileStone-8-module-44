import PropTypes from 'prop-types';



function PriceO({option}) {

   const {name, price, description} = option;

    return (
        <div className='text-white text-center py-5 px-10 rounded-lg shadow-blue-400 shaodw-xl bg-blue-600 '>
            <h2 className='my-2'>
                <span className='text-4xl mr-2 font-extrabold my-'>{price}$</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h3 className='text-3xl font-bold my-2'>{name}</h3>
            <h2 className='text-xl my-2'>{description}</h2>
            <button className='w-full bg-green-700 text-white py-2 rounded-lg hover:bg-white hover:text-green-700'>Buy Now</button>
        </div>
    );
}

export default PriceO;


PriceO.propTypes = {
    option : PropTypes.object,
};
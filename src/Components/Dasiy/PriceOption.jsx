import PriceO from "./PriceO";


function PriceOption() {
    const membershipOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "description": "Access to gym facilities during off-peak hours only",
          "price": 29.99,
          "currency": "USD",
          "duration": "1 month"
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "description": "Access to gym facilities during all hours",
          "price": 49.99,
          "currency": "USD",
          "duration": "1 month"
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "description": "Access to gym facilities at all times, plus unlimited group classes",
          "price": 79.99,
          "currency": "USD",
          "duration": "1 month"
        },
        {
          "id": 4,
          "name": "Annual Membership",
          "description": "Access to gym facilities during all hours for one year",
          "price": 499.99,
          "currency": "USD",
          "duration": "1 year"
        }
      ]
      
      
      
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-2 mx-2 gap-5">
            {
                membershipOptions.map(option => <PriceO key = {option.id} option = {option}></PriceO>)
            }
        </div>
    );
}

export default PriceOption;
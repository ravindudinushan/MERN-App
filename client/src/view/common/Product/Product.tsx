import {Component} from "react";
import spinash from "../../../images/products/spinach.png";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any;
}

interface ProductState {
    isActive: boolean
}

export class Product extends Component<ProductProps, ProductState> {

    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {

        const {data} = this.props;
        const image = require('../../../images/products/' + data.image)
        return (
            <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                <div>
                    <img className="h-[88px] w-[88px]" src={image} alt=""/>
                </div>
                <div className="flex">
                    <div>
                        <h3 className="text-secondary text-[12px] pl-2">{data.name}</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                        <h3 className="text-[12px] pl-2">{data.price} <small className="text-[7px]">{data.currency}</small></h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    {
                        this.state.isActive ?
                            <ModifyCart data={{
                                product: data,
                                isAdded: this.state.isActive
                            }}/>
                         :
                    <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]"
                          onClick={this.addToCartOnClick}>Add to Cart</button>
                    }
                </div>
            </div>
        );
    }
    private addToCartOnClick
        = () => {
        this.setState({
            isActive: true
        });
    }
}
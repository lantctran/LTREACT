import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Are you sure you want to remove ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'In Stock' : 'Out of Stock';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.ID}</td>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.ID)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;

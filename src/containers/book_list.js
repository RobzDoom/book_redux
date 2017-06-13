import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'

class BookList extends Component{
    
    renderList(){
        return this.props.books.map((book) => {
            return (
            <li          
            className= "list-group-item" 
            key= {book.title} 
            onClick ={()=> this.props.selectBook(book)} 
            >
                
                {book.title}
                
            </li>
            )
        })
    }

    render (){
        return (
            <ul className= "list-group col-sm-4"> 
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToprops (state){
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as Props
function mapDispatchToProps(dispatch){
    //Whenever selectbook is called, the result should be passed to ALL reducers
    //selectBook is just a totally plain function. Dispatch will make it go through reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}
//Promote BookList from component to container - it needs to know about dispatch Method. 
export default connect (mapStateToprops)(BookList)

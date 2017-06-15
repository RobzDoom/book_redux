const BOOK_SELECTED = 'book_selected'

export function selectBook(book){
    //This is an action creator, it needs to return an action,
    //This object has a type property
    return{
        type: BOOK_SELECTED,
        payload: book

    }
}
export default function Pagination({ currentSelection, currentPage, resultPerPage }){
    
    // Disabled the buttons 
    //when first page is 1 or last
    
    return(
        <nav aria-label="Page navigation example" className="customPagination">
            <ul className="pagination">
                <li className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}>
                    <a class="page-link" href="#" onClick={(evt) => currentSelection(evt,currentPage-1)}>Previous</a>
                </li>
                <li className={`page-item ${resultPerPage < 10 ? 'disabled' : ''}`}>
                    <a class="page-link" href="#" onClick={(evt) => currentSelection(evt,currentPage+1)}>Next</a>
                </li>
            </ul>
`       </nav>
    )
}       
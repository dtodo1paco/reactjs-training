import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

class PaginationLinks extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30 } = props;
    // prevent divideByZero
    this.totalPages = Math.ceil(totalRecords / pageLimit);
  }

  componentDidMount() {
    //this.gotoPage(1);
  }

  gotoPage = page => {
    // this line prevents setting page under 0 or over totalPages
    const nextPage = Math.max(0, Math.min(page, this.totalPages));
    console.log("next page ("+page+") will be: " + nextPage)
    this.props.onPageChanged(nextPage);
  };

  handleClick = (page, evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.props.currentPage - 1);
  };

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.props.currentPage + 1);
  };

  fetchPageNumbers = () => {
    const currentPage = this.props.currentPage;
    const totalBlocks = this.props.pageOffset + 2; // left & right pages
    if (this.totalPages > totalBlocks) {
      let pages = [];
      // calculate bounds of pages array
      const leftBound = currentPage - this.props.pageOffset;
      const rightBound = currentPage + this.props.pageOffset;
      const lastPage = this.totalPages - 1;

      // regularize bounds
      const startPage = leftBound > 0 ? leftBound : 1;
      const endPage = rightBound < lastPage ? rightBound : lastPage;

      pages = range(startPage, endPage); // generates seq number of pages
      if (startPage > 1){
        return [1, ...pages, this.totalPages];
      }
      return [...pages, this.totalPages];
    }
    return range(1, this.totalPages);
  };

  render() {
    const { currentPage, totalRecords } = this.props;
    if (!this.props.currentPage) return null;
    const pages = this.fetchPageNumbers();
    const isComplete = pages.length > this.props.pageOffset + 2;
    return (
      <Fragment>
        <nav aria-label="Pagination">
          <ul className="pagination">
            {pages.map((page, index) => {
              return (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                    }${
                    isComplete && page === 1 ? "  first": ""
                    }${
                    isComplete && page === this.totalPages ? " last": ""
                    }`}
                >
                  <a
                    className="page-link"
                    href="#."
                    onClick={e => this.handleClick(page, e)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

PaginationLinks.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default PaginationLinks;

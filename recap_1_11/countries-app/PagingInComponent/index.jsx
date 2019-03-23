import React from 'react';
import PaginationLinks from '../PaginationLinks';
import CountryCard from '../CountryCard';
import Loading from '../Loading';

import './styles.css';

const PAGE_SIZE = 12;

const timer = (time) => new Promise ( resolve => {
  setTimeout(() => {
    resolve();
  }, time);
})

class PagingInComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allResults: [],
      partialResults: [],
      currentPage: void 0,
    }
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    await timer(1000);
    const response = await fetch(this.props.url);
    const results = await response.json();
    this.setState({allResults: results},
      () => this.onPageChanged(1));
  }

  componentDidMount() {
    this.fetchData();
  }

  onPageChanged = newPage => {
    const begin = (newPage - 1) * PAGE_SIZE;
    const end  = begin + PAGE_SIZE;
    const { allResults } = this.state;
    const partialResults = allResults.slice(begin, end);
    this.setState({
      currentPage: newPage,
      partialResults,
    });
  };

  render() {
    const {
      allResults,
      partialResults,
      currentPage,
      } = this.state;
    const totalResults = allResults.length;

    if (!totalResults || totalResults === 0) return <Loading message="Loading"/>;
    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2 className={headerClass}>
                <strong className="text-secondary">{totalResults}</strong>{" "}
                Countries
              </h2>
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <PaginationLinks
                pageOffset={1} // 1 page left & 1 page right
                totalRecords={totalResults}
                pageLimit={PAGE_SIZE}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
              />
            </div>
          </div>
          {partialResults.map(country => (
            <CountryCard
              key={country.alpha3Code} country={country} />
          ))}
        </div>
      </div>
    );
  }
}


export default PagingInComponent;
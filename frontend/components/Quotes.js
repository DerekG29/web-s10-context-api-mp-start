import React, { useContext } from 'react';
import { QuotesContext } from '../context/quotesContext';


export default function Quotes() {
  const {
    quotes,
    highlightedQuote,
    displayAllQuotes,
    deleteQuote,
    editQuoteAuthenticity,
    setHighlightedQuote,
    toggleVisibility,
  } = useContext(QuotesContext)
  
  return (
    <div id="quotes">
      <h3>Quotes</h3>
      <div>
        {
          quotes
            ?.filter(qt => {
              return displayAllQuotes || !qt.apocryphal
            })
            .map(qt => (
              <div
                key={qt.id}
                className={`quote${qt.apocryphal ? " fake" : ''}${highlightedQuote === qt.id ? " highlight" : ''}`}
              >
                <div>{qt.quoteText}</div>
                <div>{qt.authorName}</div>
                <div className="quote-buttons">
                  <button onClick={() => deleteQuote(qt.id)}>DELETE</button>
                  <button onClick={() => setHighlightedQuote(qt.id)}>HIGHLIGHT</button>
                  <button onClick={() => editQuoteAuthenticity(qt.id)}>FAKE</button>
                </div>
              </div>
            ))
        }
        {
          !quotes?.length && "No quotes here! Go write some."
        }
      </div>
      {!!quotes?.length && <button onClick={toggleVisibility}>
        {displayAllQuotes ? 'HIDE' : 'SHOW'} FAKE QUOTES
      </button>}
    </div>
  )
}

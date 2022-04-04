import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: "q1", author: "blas", text: "asasdasd"},
    {id: "q2", author: "bas", text: "asdasd"},
    {id: "q3", author: "las", text: "asdsdasd"},
    {id: "q4", author: "bs", text: "asdasdd"},

];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;
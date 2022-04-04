import {useRouter} from "next/router";

const Read = () => {
    const router  = useRouter();

    return <h1>Read {router.query.read}</h1>
};

export default Read;
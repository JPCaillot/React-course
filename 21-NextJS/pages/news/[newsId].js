//our-domain.com/news/something-important
import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    //send a request to backend API to fetch news item w/ newsId

    return <h1>The Detail Page</h1>
};

export default DetailPage;
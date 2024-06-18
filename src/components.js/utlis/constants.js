 const GOOGLE_API_KEY=`AIzaSyA5wQM6TThVyQm-jR714tNXzJCp9S9AfVA`
export const Youtube_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_Search_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_Commnet_API=`https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=`
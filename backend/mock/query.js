export default function getHashtags(query, hashtagObj) {
	for (const key of Object.keys(hashtagObj)) {
		console.log(`Raw Query: ${query}`)
		const decodedQuery = decodeURIComponent(query)
		console.log(`Decoded Query: ${decodedQuery}`)
		console.log(`Hashtag topic: ${key}`)
		const hashtagList = hashtagObj[key]
		console.log(`Hashtag list: ${hashtagList}`)
		const keyMatchesQuery = key.toLowerCase().includes(decodedQuery)
		console.log(`Topic_matches_query: ${keyMatchesQuery}`)
		for (const hashtag of hashtagList) {
			if (
				keyMatchesQuery ||
				hashtag.toLowerCase().includes(decodedQuery)
			) {
				return hashtagList
			}
		}
	}
}

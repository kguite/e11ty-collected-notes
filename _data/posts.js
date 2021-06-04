const axios = require('axios')

module.exports = async () => {
    const result = await axios.get('https://collectednotes.com/katiemarie.json')
    return {
        posts: result.data.notes
    }
}

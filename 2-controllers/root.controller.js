exports.getApiInfo = (req, res) => {
    res.status(200).send({ endpoints: {"GET /api/games/:game_info": "returns info about a game using game_id"}})
}
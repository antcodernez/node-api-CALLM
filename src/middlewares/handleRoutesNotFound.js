const handleRoutesNotFound = (req, res) => {
    res.status(404).json({
      message: 'Route Not Found',
      method: req.method,
      requestedUrl: req.url
    })
};

export {
    handleRoutesNotFound
}
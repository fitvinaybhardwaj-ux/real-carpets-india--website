module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'POST') {
    const refId = `RCI-QT-${Math.floor(1000 + Math.random() * 9000)}`;
    return res.status(200).json({
      status: 'success',
      refId: refId,
      message: 'Quotation request logged successfully at Panipat export desk.'
    });
  }

  return res.status(404).json({ error: 'Endpoint not found' });
};

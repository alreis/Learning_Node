import Notification from '../Schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const checkIsProvier = await User.findOne({
      whare: { id: req.userId, provider: true },
    });

    if (!checkIsProvier) {
      return res.status(401).json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    }).sort({ createdAt: 'desc' }).limit(20);

    return res.json(notifications);
  }
}

export default new NotificationController();

import Joi from '@hapi/joi';

export const posCaclSchema = Joi.object({
  stockPrice: Joi.number().min(1).required(),
  stockAmount: Joi.number().min(1).required(),
  sellGainPrice: Joi.number().min(1).required(),
  sellLossPrice: Joi.number().min(1).required(),
  sellGainPercent: Joi.number().min(1).required(),
  sellLossPercent: Joi.number().min(1).required(),
  stockWorth: Joi.number().min(1).required(),
  potentialGain: Joi.number().min(1).required(),
  potentialLoss: Joi.number().min(1).required(),
  totalWithGains: Joi.number().min(1).required(),
  totalWithLoss: Joi.number().min(1).required(),
});
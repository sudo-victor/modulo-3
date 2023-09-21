import { Request, Response } from "express";
import * as yup from "yup"

import { BookingService } from "../services/BookingService";
import { STATUS_CODE } from "../../../utils/statusCode";
import { makeError } from "../../../utils/makeError";

class BookingController {

  constructor(private bookingService: BookingService) {}

  async create(req: Request, res: Response) {
    const { body, params } = req

    const createBookingValidation = yup.object().shape({
      checkinAt: yup.string().required(),
      checkoutAt: yup.string().required(),
      userId: yup.string().required(),
      hotelId: yup.string().required(),
    })

    const payload = { ...body, ...params }

    try {
      await createBookingValidation.validate(payload)
    } catch(e: any) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(makeError(
        e.errors,
        STATUS_CODE.BAD_REQUEST
      ))
    }

    const result = await this.bookingService.create(payload)
    if ("error" in result) {
      return res.status(result.status).json(result)
    }

    return res.status(STATUS_CODE.CREATED).json(result)
  }

  async cancel(req: Request, res: Response) {
    const { params } = req

    const paramsValidator = yup.object({
      id: yup.string().required()
    })

    try {
      await paramsValidator.validate(params)
    } catch(e: any) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(makeError(
        e.errors,
        STATUS_CODE.BAD_REQUEST
      ))
    }

    const result = await this.bookingService.cancel(params.id)
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(204).send(STATUS_CODE.NO_CONTENT)
  }

}

export { BookingController }
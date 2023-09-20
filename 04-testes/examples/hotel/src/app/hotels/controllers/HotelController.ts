import { Request, Response } from "express";
import * as yup from "yup";
import { makeError } from "../../../utils/makeError";
import { STATUS_CODE } from "../../../utils/statusCode";
import { HotelService } from "../services/HotelService";

class HotelController {
  constructor(private service: HotelService) {}

  async create(req: Request, res: Response) {
    const { body, file } = req

    const bodyValidation = yup.object().shape({
      name: yup.string().required(),
      address: yup.string().required(),
      roomsAvailables: yup.number().required(),
    })

    try {
      await bodyValidation.validate(body)
    } catch (error: any) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(makeError(error.errors, STATUS_CODE.BAD_REQUEST))
    }

    const result = await this.service.create({
      ...body,
      file: {
        filename: file?.filename,
        mimetype: file?.mimetype,
      }
    })
    if('error' in  result) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(result)
    }

    return res.status(STATUS_CODE.CREATED).json(result)
  }

}

export { HotelController }
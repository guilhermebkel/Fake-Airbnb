import * as multer from 'multer'
import * as path from 'path'

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, callback) => {
      const extension = path.extname(file.originalname)
      const name = path.basename(file.originalname, extension)

      callback(null, `${name}-${Date.now()}${extension}`)
    },
  }),
}
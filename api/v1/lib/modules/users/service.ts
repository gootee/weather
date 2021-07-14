import { IUser } from './model.js'
import User from './schema.js'
// import { DeletedDetails } from '../common/model.js'

export default class UserService {
    
  public createUser(user_params: IUser, callback: any) {
    const _session = new User(user_params)
    _session.save(callback)
  }

  public filterUser(query: any, callback: any) {
    User.findOne(query, callback)
  }

  public updateUser(user_params: IUser, callback: any) {
    const query = { _id: user_params._id }
    User.findOneAndUpdate(query, user_params, callback)
  }
  
  public deleteUser(_id: String, callback: any) {
    const query = { _id: _id }
    User.deleteOne(query, callback)
  }

}
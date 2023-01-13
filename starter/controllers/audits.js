const Audit = require('../models/Audit')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllAudits = async (req, res) => {
  res.send('get all audits')
}
const getAudit = async (req, res) => {
  res.send('get audit')
}
const createAudit = async (req, res) => {
  req.body.createdBy = req.user.userId
  const audit = await Audit.create(req.body)
  res.status(StatusCodes.CREATED).json({ audit })
}
const updateAudit = async (req, res) => {
  res.send('update audit')
}
const deleteAudit = async (req, res) => {
  res.send('delete audit')
}


module.exports = {
  getAllAudits,
  getAudit,
  createAudit,
  updateAudit,
  deleteAudit,
}
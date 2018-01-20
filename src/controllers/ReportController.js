const db = require('../models');
const Report = db.Report;

class ReportController {
  fetchAll() {
    return Report.findAll().then(reports => {
      return reports.map(this._serializeReport);
    });
  }

  create(report_params) {
    return Report.create(report_params);
  }

  _serializeReport(report) {
    return {
      title: report.title,
      description: report.description,
      resolved: report.resolved,
      createdAt: report.createdAt,
      updatedAt: report.updatedAt,
    };
  }
}

module.exports = new ReportController();

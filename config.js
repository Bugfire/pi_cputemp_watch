module.exports = {
  db: {
    host: 'MYSQL_DB_HOSTNAME_OR_IP_HERE',
    name: 'MYSQL_DB_NAME_HERE',
    user: 'MYSQL_DB_USER_HERE',
    password: 'MYSQL_DB_PASSWORD_HERE'
  },
  timediff: 9*3600,
  pi_cpu_temp: 'pi_cpu_temp',
  tempfile: '/sys/class/thermal/thermal_zone0/temp'
};

module.exports.pdb = module.exports.db.name + '.' + module.exports.pi_cpu_temp;

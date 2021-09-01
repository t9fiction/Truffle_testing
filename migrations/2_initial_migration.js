const Migrations = artifacts.require("Galaxy");

module.exports = async function (deployer,network,accounts) {
  await deployer.deploy(Galaxy);
};

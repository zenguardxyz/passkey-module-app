import { DeployFunction } from 'hardhat-deploy/types'

const deploy: DeployFunction = async ({ deployments, getNamedAccounts, network }) => {
  // if (!network.tags.dev && !network.tags.test) {
  //   return
  // }

  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  // await deploy('ZenGuardShirtToken', {
  //   from: deployer,
  //   args: ["0x958543756A4c7AC6fB361f0efBfeCD98E4D297Db"],
  //   log: true,
  //   deterministicDeployment: true,
  // })

  await deploy('ZenGuardHHGoa', {
    from: deployer,
    args: ['ZenGuardHHGoa', 'ZHHG'],
    log: true,
    deterministicDeployment: true,
  })
  
}

export default deploy

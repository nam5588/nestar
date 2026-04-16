import { Query, Mutation, Resolver } from '@nestjs/graphql';
import { PropertyService } from './property.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { MemberType } from '../../libs/enums/member.enum';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class PropertyResolver {
	constructor(private readonly propertyService: PropertyService) {}

	@Roles(MemberType.AGENT)
	@UseGuards(RolesGuard)
	@Mutation(() => String)
	public async createProperty(@AuthMember() authMember: Member): Promise<string> {
		console.log('Mutation: createProperty');
		return `Welcome ${authMember.memberNick}, you are ${authMember.memberType} (memberId: ${authMember._id})`;
	}
}

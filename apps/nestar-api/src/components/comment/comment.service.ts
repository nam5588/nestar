import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemberService } from '../member/member.service';

@Injectable()
export class CommentService {
	constructor(
		@InjectModel('Comment') private readonly CommentModel: Model<Comment>,
		private memberService: MemberService,
	) {}
}

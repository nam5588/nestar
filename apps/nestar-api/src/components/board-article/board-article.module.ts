import { Module } from '@nestjs/common';
import { BoardArticleService } from './board-article.service';
import { BoardArticleResolver } from './board-article.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import BoardArticleSchema from '../../schemas/BoardArticle.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'BoardArticle',
				schema: BoardArticleSchema,
			},
		]),
		AuthModule,
		MemberModule,
	],
	providers: [BoardArticleService, BoardArticleResolver],
	exports: [BoardArticleService],
})
export class BoardArticleModule {}

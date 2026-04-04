import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot({
			driver: ApolloDriver, // Query va Muationni ochib beryabdi
			playground: true, // ...3003/graphql da playgrounda ochadi
			uploads: false, // file yuklamaydigan qildik
			autoSchemaFile: true, // NestJS avtomatik GraphQL schema yaratadi va .gql file yozish shart emas
		}),
		ComponentsModule,
		DatabaseModule,
	],
	controllers: [AppController], // olib tashlash ham mumkin faqat biz buni test qilish maqsadida qoldirdik
	providers: [AppService, AppResolver],
})
export class AppModule {}

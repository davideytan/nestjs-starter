import { Module } from '@nestjs/common';
import { Configuration } from './common';

@Module({
  imports: [],
  controllers: [],
  components: [
    Configuration,
  ],
})
export class ApplicationModule {}

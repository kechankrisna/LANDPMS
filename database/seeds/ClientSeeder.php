<?php

use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 30; $i++) { 
            $name = Str::random(10);
                
            DB::table('clients')->insert([
                'name' => $name,
                'email' => $name.'@gmail.com',
                'user_id' => rand(1, 30), 
            ]);
        }
    }
}

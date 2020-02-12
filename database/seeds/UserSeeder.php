<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
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
            // if($i==0){
            //     $name = 'aladdung';
            // }
                
            DB::table('users')->insert([
                'name' => $name,
                'email' => $name.'@gmail.com',
                'password' => Hash::make('88888888'),
                'reference_id' => rand(1, 30),
                'activation_token' => Str::random(60), 
            ]);
        }
    }
}

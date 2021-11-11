class CreateInspirationalQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :inspirational_quotes do |t|
      t.string :quote
      t.string :author
      t.string :meaning
      t.string :date

      t.timestamps
    end
  end
end
